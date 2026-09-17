import fs from "node:fs";
import path from "node:path";

const DATA_DIR = path.resolve(process.cwd(), "server/data");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

export interface ContactInquiry {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  industry?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  description: string;
  referral?: string;
  createdAt: string;
  status: "new" | "reviewed" | "responded" | "archived";
}

function ensureDirectoryExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readJsonFile<T>(filePath: string, defaultValue: T): T {
  try {
    ensureDirectoryExists();
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), "utf-8");
      return defaultValue;
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as T;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return defaultValue;
  }
}

function writeJsonFile<T>(filePath: string, data: T): void {
  ensureDirectoryExists();
  const tempFile = `${filePath}.tmp`;
  fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), "utf-8");
  fs.renameSync(tempFile, filePath);
}

export const db = {
  getInquiries(): ContactInquiry[] {
    return readJsonFile<ContactInquiry[]>(INQUIRIES_FILE, []);
  },

  saveInquiry(inquiryData: Omit<ContactInquiry, "id" | "createdAt" | "status">): ContactInquiry {
    const inquiries = this.getInquiries();
    const newInquiry: ContactInquiry = {
      ...inquiryData,
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      createdAt: new Date().toISOString(),
      status: "new",
    };

    inquiries.unshift(newInquiry);
    writeJsonFile(INQUIRIES_FILE, inquiries);
    return newInquiry;
  },

  getInquiryById(id: string): ContactInquiry | undefined {
    const inquiries = this.getInquiries();
    return inquiries.find((item) => item.id === id);
  },
};
