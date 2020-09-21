import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from '../http.service';
import { ConversationsService } from './conversations.service';
import { IConversationsResponse } from '../../models/conversation';

describe('ConversationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ConversationsService, HttpService ]
    });
  });

  it(
    'should be initialized',
    inject([ ConversationsService ], (conversationsService: ConversationsService) => {
      expect(conversationsService).toBeTruthy();
    })
  );

  it(
    'should perform get conversations correctly',
    fakeAsync(
      inject(
        [ ConversationsService, HttpTestingController ],
        (conversationsService: ConversationsService, backend: HttpTestingController) => {

          // Set up
          const url = 'http://localhost:3000/api/conversations/list?types=public_channel,private_channel&limit=20&token=null';
          const responseObject: IConversationsResponse = {
            ok: true,
            channels: [{created: 1}],
            response_metadata: { ok: true }
          };
          let response = null;
          // End Setup

          conversationsService.getConversations().subscribe(
            (receivedResponse: IConversationsResponse) => {
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
        [ ConversationsService, HttpTestingController ],
        (conversationsService: ConversationsService, backend: HttpTestingController) => {

          // Set up
          const url = 'http://localhost:3000/api/conversations/list?types=public_channel,private_channel&limit=20&token=null';
          const responseObject = {
            ok: false,
            message: 'code expired'
          };
          let response = null;
          // End Setup

          conversationsService.getConversations().subscribe(
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
