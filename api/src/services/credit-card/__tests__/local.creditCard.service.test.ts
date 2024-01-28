import { LocalCreditCardService } from "../local.creditCard.service";

describe("LocalCreditCardService Tests", () => {
  let service: LocalCreditCardService;

  beforeEach(() => {
    service = new LocalCreditCardService();
  });

  // Test with valid credit card numbers
  test.each([
    "4539578763621486",
    "4485275742308327",
    "6011514433546201",
    // Add more valid credit card numbers here
  ])("should return true for valid credit card number %s", number => {
    expect(service.isCreditCardNumber(number)).toBeTruthy();
  });

  // Test with invalid credit card numbers
  test.each([
    "4539578763621487", // Invalid checksum
    "4485275742308328", // Invalid checksum
    "6011514433546202", // Invalid checksum
    "1234567890123456", // Completely invalid
    "", // Empty string
    "abcdef", // Non-numeric characters
    // Add more invalid credit card numbers here
  ])("should return false for invalid credit card number %s", number => {
    expect(service.isCreditCardNumber(number)).toBeFalsy();
  });
});
