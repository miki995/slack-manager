import { environment } from '../../environments/environment';

interface IConfig {
  apiEndpoint: string;
  redirectUri?: string;
  ga?: string;
  signIn?: string;
}

const config: IConfig = {
  apiEndpoint: environment.api,
  redirectUri: environment.redirectUri,
  ga: environment.ga,
  signIn: environment.signIn
};

export { config };
