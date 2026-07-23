export class Logger {
  static info(message: string): void {
    console.log(`ℹ️  INFO     ${message}`);
  }

  static success(message: string): void {
    console.log(`✅ SUCCESS  ${message}`);
  }

  static warning(message: string): void {
    console.log(`⚠️  WARNING  ${message}`);
  }

  static error(message: string): void {
    console.log(`❌ ERROR    ${message}`);
  }
}
