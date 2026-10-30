const ADMIN_EMAILS = new Set([
  "levikeus44@gmail.com",
  "levi.keus@icloud.com",
]);

export function isAdminEmail(email: string | undefined): boolean {
  return email !== undefined && ADMIN_EMAILS.has(email.toLowerCase());
}

export function isVerifiedAdmin(user: {
  email?: string;
  email_confirmed_at?: string | null;
} | null): boolean {
  return Boolean(user?.email_confirmed_at && isAdminEmail(user.email));
}
