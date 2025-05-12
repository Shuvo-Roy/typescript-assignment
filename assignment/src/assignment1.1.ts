{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
      console.log(input.toUpperCase());
      return input.toUpperCase();
    } else {
      console.log(input);
      return input;
    }
  }
  formatString("hello", true);
}
