import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { IExchangeTokenResponse } from '../../models/exchange-token-response';
import { HttpService } from '../http.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AuthService, HttpService ]
    });
  });

  it(
    'should be initialized',
    inject([ AuthService ], (authService: AuthService) => {
      expect(authService).toBeTruthy();
    })
  );

  it(
    'should perform exchange code for token correctly',
    fakeAsync(
      inject(
        [ AuthService, HttpTestingController ],
        (authService: AuthService, backend: HttpTestingController) => {

          // Set up
          const url = 'http://localhost:3000/api/auth?&code=code&redirectUri=http://localhost:4200/&token=null';
          const responseObject: IExchangeTokenResponse = {
            ok: true,
            authed_user: { access_token: 'token' }
          };
          let response = null;
          // End Setup

          authService.exchangeCodeForToken('code').subscribe(
            (receivedResponse: IExchangeTokenResponse) => {
              response = receivedResponse;
            },
            (error: any) => {
            }
          );

          const requestWrapper = backend.expectOne({ url });
          requestWrapper.flush(responseObject);

          tick();

          expect(requestWrapper.request.method).toEqual('GET');
          expect(response).toEqual(responseObject);
          expect(response.ok).toBe(true);
        }
      )
    )
  );

  it(
    'should fail exchange token correctly',
    fakeAsync(
      inject(
        [ AuthService, HttpTestingController ],
        (authService: AuthService, backend: HttpTestingController) => {

          // Set up
          const url = 'http://localhost:3000/api/auth?&code=code&redirectUri=http://localhost:4200/&token=null';
          const responseObject = {
            ok: false,
            message: 'code expired'
          };
          let response = null;
          // End Setup

          authService.exchangeCodeForToken('code').subscribe(
            (receivedResponse: any) => {
              response = receivedResponse;
            },
            (error: any) => {
            }
          );

          const requestWrapper = backend.expectOne({ url });
          requestWrapper.flush(responseObject);

          tick();

          expect(requestWrapper.request.method).toEqual('GET');
          expect(response).toEqual(responseObject);
          expect(response.ok).toBe(false);
        }
      )
    )
  );
});
