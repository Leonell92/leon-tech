import { Router, Request, Response } from "express";
import { db } from "../storage/db";

export const contactRouter = Router();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      industry,
      service,
      budget,
      timeline,
      description,
      referral,
    } = req.body;

    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || !name.trim()) {
      errors.name = "Full name is required.";
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      errors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!description || typeof description !== "string" || !description.trim()) {
      errors.description = "Project description is required.";
    } else if (description.trim().length < 20) {
      errors.description = "Project description must be at least 20 characters.";
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
      return;
    }

    const savedInquiry = db.saveInquiry({
      name: name.trim(),
      company: typeof company === "string" ? company.trim() : "",
      email: email.trim().toLowerCase(),
      phone: typeof phone === "string" ? phone.trim() : "",
      industry: typeof industry === "string" ? industry.trim() : "",
      service: typeof service === "string" ? service.trim() : "",
      budget: typeof budget === "string" ? budget.trim() : "",
      timeline: typeof timeline === "string" ? timeline.trim() : "",
      description: description.trim(),
      referral: typeof referral === "string" ? referral.trim() : "",
    });

    console.log(`[Contact Form] New inquiry received from: ${savedInquiry.name} <${savedInquiry.email}> (ID: ${savedInquiry.id})`);

    res.status(201).json({
      success: true,
      message: "Your inquiry has been received. We will respond within one business day.",
      data: {
        id: savedInquiry.id,
        createdAt: savedInquiry.createdAt,
      },
    });
  } catch (error) {
    console.error("[Contact Form] Error processing submission:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected server error occurred while processing your inquiry.",
    });
  }
});

contactRouter.get("/", (_req: Request, res: Response) => {
  try {
    const inquiries = db.getInquiries();
    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    console.error("[Contact Form] Error retrieving inquiries:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch inquiries.",
    });
  }
});

contactRouter.get("/:id", (req: Request, res: Response) => {
  try {
    const inquiry = db.getInquiryById(req.params.id);
    if (!inquiry) {
      res.status(404).json({
        success: false,
        message: "Inquiry not found.",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: inquiry,
    });
  } catch (error) {
    console.error("[Contact Form] Error fetching inquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch inquiry.",
    });
  }
});
