export enum ROLE {
  ADMIN = "ADMIN",
  SECRETARY = "SECRETARY",
  MODERATOR = "MODERATOR",
  STUDENT = "STUDENT",
}

export function toEnum(value: string): ROLE {
  switch (value) {
    case "ADMIN":
      return ROLE.ADMIN;
    case "SECRETARY":
      return ROLE.SECRETARY;
    case "MODERATOR":
      return ROLE.MODERATOR;
    case "STUDENT":
      return ROLE.STUDENT;
    default:
      throw new Error("Invalid value");
  }
}
