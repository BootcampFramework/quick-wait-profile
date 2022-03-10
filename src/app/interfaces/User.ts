interface IUserCredentials {
  username: string,
  password: string,
};

interface IOptionsPathType {
  [key: string]: string,
  login: string,
  create: string,
}

interface IUserInfos {
  [key: string]: any,
  status: number,
  token: string,
  type: string,
  id: number,
  username: string ,
  email: string
}

interface ICreateUserInfos {
  username: string,
  email: string,
  cpf: string,
  password: string
}

interface IEnvironmentAuthType {
  [key: string]: any,
  baseURL: string
}

interface IAuthServiceLoginResponse extends IUserInfos {}

interface IAuthServiceRegisterResponse {
  status: number,
  message: string
}

interface IErrorHandlerMessage {
  [key: string]: any,
  "Error: The username informed does not exist!"?: string,
  "This username is already being used."?: string,
  "The username was not informed."?: string,
  "The email was not informed."?: string,
}

interface IFormRegisterInputs {
  [key: string]: any,
  username: string,
  email: string,
  cpf: string,
  password: string,
  confirmPassword: string
}

export { IAuthServiceRegisterResponse, IUserCredentials,IFormRegisterInputs, IErrorHandlerMessage, IOptionsPathType, IUserInfos, ICreateUserInfos, IEnvironmentAuthType, IAuthServiceLoginResponse }
