/**
 * This class holds `string` Helper
 */
export class StringHelper {
  /**
   * Accept a string and replace all *`%s`* with data
   * @param {string} value String Value to Replace data in
   * @param {string} optionalParams Replace values
   * @return {string} Data placed string
   */
  public static translationHelper(
    value: string,
    ...optionalParams: string[]
  ): string {
    let newString = value;
    for (let index = 0; index < optionalParams.length; index += 1) {
      const element = optionalParams[index];
      newString = newString.replace("%s", element);
    }

    return newString;
  }

  /**
   * Generate Key
   * @param {string} uid
   * @param {number} index
   * @return {string}
   */
  public static generateUID(uid: string, index: number): string {
    return `${uid}-${index}`;
  }
}
