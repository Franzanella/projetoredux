state = DCEeFWf45A53sdfKef424

#### Usado no APP:
https://www.linkedin.com/oauth/v2/authorization?response_ 
type=code&
client_id=77yqgmwosyx90h&
redirect_uri=https://projetoredux-tcrsilva.c9users.io/public/index.html&
state=DCEeFWf45A53sdfKef424

##### Após Autorização:
https://projetoredux-tcrsilva.c9users.io/public/index.html?
code=AQRvuunVQKKdNYZfrJcrH-0ucFrIMyZKgr_CBdTx0zzFb9MsJvpY4W7Eo-CPiSIQqIOXma0CQ_W8lf9MnzupL_bY8Kuj5dGAN7oRYaOP8_zrvHKm0U8BYFyCYEo3cwq5IXgKnWHN1Ir8YiPe2_bZ3DwWXfmx7Ba5U3san-im
&state=DCEeFWf45A53sdfKef424

#### Access token:
https://www.linkedin.com/oauth/v2/accessTokenrant_type=authorization_code&code=AQRMntV6Nsg8FYRd3ePSN0zlsY8Aw6SdmllWYjTmBiQPPg7YBG5IkVg2LJwelhpz0azx2oXDDTDPn0pCFFLueDdmXgkYhSh3Ccd-fb4n0YRtyj9KWN2VOC4i_Uf2Hj9VPNnTSJ6900UixEUJ_hP49hE4kKh53M36OwehVmHC&&redirect_uri=https://projetoredux-tcrsilva.c9users.io/public/index.html&client_id=77yqgmwosyx90h&client_secret=YWc9pOQmLFwvEXla"

curl -F 'client_id=77yqgmwosyx90h' \
    -F 'client_secret=YWc9pOQmLFwvEXla' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=https://projetoredux-tcrsilva.c9users.io/public/index.html' \
    -F 'code=AQSfLSTxdppWTMccRc1pXXiwpARlJMBQmR25vl7KIf90PhY7E-U3nVBSSikW9mAAz76PlEZRZvRgowQg6NtnxeynfLQ1SbBPUfwUWEz_n-ovdIrHd2jWQeNSZGMJocpKYzSIsj0VDREcsPKhyv4D1bz9guWlzs6p2iZZ4sD_' \
    -h 'Content-Type: application/x-www-form-urlencoded'
    https://www.linkedin.com/oauth/v2/accessToken
    
curl --header "Content-Type: application/x-www-form-urlencoded" \
  --request POST \
  -F 'client_id=77yqgmwosyx90h' \
    -F 'client_secret=YWc9pOQmLFwvEXla' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=https://projetoredux-tcrsilva.c9users.io/public/index.html' \
    -F 'code=AQSfLSTxdppWTMccRc1pXXiwpARlJMBQmR25vl7KIf90PhY7E-U3nVBSSikW9mAAz76PlEZRZvRgowQg6NtnxeynfLQ1SbBPUfwUWEz_n-ovdIrHd2jWQeNSZGMJocpKYzSIsj0VDREcsPKhyv4D1bz9guWlzs6p2iZZ4sD_' \
    https://www.linkedin.com/oauth/v2/accessToken

##### ESSA curl:    
curl -X POST -d 'client_id=77yqgmwosyx90h' \
    -d 'client_secret=YWc9pOQmLFwvEXla'\
    -d 'grant_type=authorization_code'\
    -d 'redirect_uri=https://projetoredux-tcrsilva.c9users.io/public/index.html'\
    -d 'code=AQRvuunVQKKdNYZfrJcrH-0ucFrIMyZKgr_CBdTx0zzFb9MsJvpY4W7Eo-CPiSIQqIOXma0CQ_W8lf9MnzupL_bY8Kuj5dGAN7oRYaOP8_zrvHKm0U8BYFyCYEo3cwq5IXgKnWHN1Ir8YiPe2_bZ3DwWXfmx7Ba5U3san-im' \
    https://www.linkedin.com/oauth/v2/accessToken
    
##### Access retornada:

{"access_token":"AQX8GNwkEcz72uG9pat2ETZb3uI1HL3IXwCsVk3pRtUBAJNtzhG4FDeKZOkYP8YTYDk6BlGBTKp1pxQqUV0xeES2DdceMYfJ9S4AsLYkgHRdBHCVC5p6SYMcYj7GLZu0GJabCUgR_C_M-naCL3S04Dp11reGyTScq-31m2yExnOKlIeNbAYih3wDkfi9v0GjRYC0DFv82k9OOQOhDM1-U0QhfFBf_lPC9mUgjq952rw8h8RoWeBDXas43PFIW9ViS8xri7SvDxgimEOpBAB6gbKuFh-eNiSZYOHJLz-5CyGNeGq_X9_wZYuk6z-VvlMvf3fTPCUbiz_tv3mn2KkbzISrpQKfDQ","expires_in":5183999}

#### Solicitação:

GET /v1/people/~ HTTP/1.1
Host: api.linkedin.com
Connection: Keep-Alive
Authorization: Bearer AQXdSP_W41_UPs5ioT_t8HESyODB4FqbkJ8LrV_5mff4gPODzOYR

