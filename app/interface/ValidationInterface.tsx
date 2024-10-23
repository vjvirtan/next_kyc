export interface MainErrorInterface {
  messages: ErrorMessageInterface[];
}

export interface ErrorMessageInterface {
  message: MessageInterface[];
  field: string;
}

export interface ErrorFieldInterface {
  key: string;
  errorMessage: MessageInterface[];
}

export interface MessageInterface {
  message: string;
  input: string;
  criteria: string;
}
