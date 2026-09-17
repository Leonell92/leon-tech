import { Router, Request, Response } from "express";

export const authRouter = Router();

authRouter.post("/login", (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
      return;
    }

    // Portal authentication hook - can be configured with DB/LDAP/Supabase
    // Default demo/development credentials:
    if (password.length < 6) {
      res.status(401).json({
        success: false,
        message: "Invalid credentials. Password must be at least 6 characters.",
      });
      return;
    }

    const token = `bw_token_${Buffer.from(email).toString("base64")}_${Date.now()}`;

    res.status(200).json({
      success: true,
      message: "Sign in successful.",
      data: {
        token,
        user: {
          email,
          role: "client",
          name: email.split("@")[0],
        },
      },
    });
  } catch (error) {
    console.error("[Auth] Login error:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred during sign in.",
    });
  }
});

authRouter.get("/me", (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      message: "Unauthorized. Missing or invalid Bearer token.",
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: {
      status: "authenticated",
      service: "Bridgeway Technologies Client Portal",
    },
  });
});
