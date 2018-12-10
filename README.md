# Assignment 2 - Vue app - Automated development process.

Name:  Zhiwen Han

Student No.:  20082239

## Overview.

  A picture collection web application which contains two models: picture and account.
  You can upload pictures with articles, or just see other's pictures and collect.
  The basic CRUD is realized in this application.

## E2E Testing.


     $ npx cypress run --spec cypress/integration/Upload.spec.js
     Running: Upload.spec.js...                                           (4 of 4)


       Upload
         ✓ should contain an upload box (8993ms)
         ✓ should contain text field for file name (3721ms)
         ✓ should contain text field for name (1653ms)
         ✓ should contain text field for title (1591ms)
         ✓ should contain text field for content (1337ms)
         ✓ should contain a button to upload (1406ms)


       6 passing (19s)


       (Results)

       ┌──────────────────────────────┐
       │ Tests:        6              │
       │ Passing:      6              │
       │ Failing:      0              │
       │ Pending:      0              │
       │ Skipped:      0              │
       │ Screenshots:  0              │
       │ Video:        true           │
       │ Duration:     18 seconds     │
       │ Spec Ran:     Upload.spec.js │
       └──────────────────────────────┘


       (Video)

       - Started processing:   Compressing to 32 CRF
       - Finished processing:  /Users/Soundtrack/Workspace/WebStrom_Workspace/pictureWeb/QiLuo-2.0/cypress/videos/Upload.spec.js.mp4 (7 seconds)

## Continuous Integration.

https://travis-ci.org/koyomi233/QiLuo/builds/466034872

## Automated Deployment.

http://drab-arm.surge.sh/

## Extra features.

Since there is only one initial page for this web application, which controls the components of 'Homepage', 'Upload'
and 'ListPage'. The replacement of this three pages is decided by a attribute which controls the visible of the
components. This structure can greatly omit duplicate display code. However, it's impossible to test each page by setting
a url hook. The best way to test the code I think, is to set click method as a hook, instead of url.

## Appendix.

     $ npx cypress run


         (Run Starting)

          ┌────────────────────────────────────────────────────────────────────────────┐
          │ Cypress:  3.1.3                                                            │
          │ Browser:  Electron 59 (headless)                                           │
          │ Specs:    4 found (Card.spec.js, LeftControl.spec.js, Login.spec.js, Uplo… │
          └────────────────────────────────────────────────────────────────────────────┘


        ────────────────────────────────────────────────────────────────────────────────

          Running: Card.spec.js...                                             (1 of 4)

          Card
              ✓ should contain an alert on the top (9519ms)
              mu-card
                ✓ should return mu-card (4584ms)
                ✓ card should contain two button (1855ms)
                ✓ card should contain avatar (1746ms)
                ✓ card should contain image (1461ms)


            5 passing (20s)


            (Results)

            ┌────────────────────────────┐
            │ Tests:        5            │
            │ Passing:      5            │
            │ Failing:      0            │
            │ Pending:      0            │
            │ Skipped:      0            │
            │ Screenshots:  0            │
            │ Video:        true         │
            │ Duration:     19 seconds   │
            │ Spec Ran:     Card.spec.js │
            └────────────────────────────┘


            (Video)

            - Started processing:   Compressing to 32 CRF
            - Finished processing:  /Users/Soundtrack/Workspace/WebStrom_Workspace/pictureWeb/QiLuo-2.0/cypress/videos/Card.spec.js.mp4 (9 seconds)

           ────────────────────────────────────────────────────────────────────────────────

             Running: LeftControl.spec.js...                                      (2 of 4)


             LeftControl
               ✓ Whether it contains a left control (7147ms)
               left control
                 ✓ Has a menu contained a button (3786ms)
                 ✓ should have a invisible list (1788ms)


             3 passing (13s)


             (Results)

             ┌───────────────────────────────────┐
             │ Tests:        3                   │
             │ Passing:      3                   │
             │ Failing:      0                   │
             │ Pending:      0                   │
             │ Skipped:      0                   │
             │ Screenshots:  0                   │
             │ Video:        true                │
             │ Duration:     13 seconds          │
             │ Spec Ran:     LeftControl.spec.js │
             └───────────────────────────────────┘


             (Video)

             - Started processing:   Compressing to 32 CRF
             - Finished processing:  /Users/Soundtrack/Workspace/WebStrom_Workspace/pictureWeb/QiLuo-2.0/cypress/videos/LeftControl.spec.js.mp4 (5 seconds)

           ────────────────────────────────────────────────────────────────────────────────

             Running: Login.spec.js...                                            (3 of 4)


             Login
               ✓ should have a intorduction (8435ms)
               ✓ Type into two forms (3401ms)
               ✓ should go to the sign up page (1175ms)
               Click login button
                 ✓ should allow the login requirement (1815ms)
                 ✓ should return an error because of the wrong usename and password (2022ms)


             5 passing (17s)


             (Results)

             ┌─────────────────────────────┐
             │ Tests:        5             │
             │ Passing:      5             │
             │ Failing:      0             │
             │ Pending:      0             │
             │ Skipped:      0             │
             │ Screenshots:  0             │
             │ Video:        true          │
             │ Duration:     17 seconds    │
             │ Spec Ran:     Login.spec.js │
             └─────────────────────────────┘


             (Video)

             - Started processing:   Compressing to 32 CRF
             - Finished processing:  /Users/Soundtrack/Workspace/WebStrom_Workspace/pictureWeb/QiLuo-2.0/cypress/videos/Login.spec.js.mp4 (6 seconds)

           ────────────────────────────────────────────────────────────────────────────────

             Running: Upload.spec.js...                                           (4 of 4)


             Upload
               ✓ should contain an upload box (8993ms)
               ✓ should contain text field for file name (3721ms)
               ✓ should contain text field for name (1653ms)
               ✓ should contain text field for title (1591ms)
               ✓ should contain text field for content (1337ms)
               ✓ should contain a button to upload (1406ms)


             6 passing (19s)


             (Results)

             ┌──────────────────────────────┐
             │ Tests:        6              │
             │ Passing:      6              │
             │ Failing:      0              │
             │ Pending:      0              │
             │ Skipped:      0              │
             │ Screenshots:  0              │
             │ Video:        true           │
             │ Duration:     18 seconds     │
             │ Spec Ran:     Upload.spec.js │
             └──────────────────────────────┘


             (Video)

             - Started processing:   Compressing to 32 CRF
             - Finished processing:  /Users/Soundtrack/Workspace/WebStrom_Workspace/pictureWeb/QiLuo-2.0/cypress/videos/Upload.spec.js.mp4 (7 seconds)

           ================================================================================

             (Run Finished)


                 Spec                                    Tests  Pass…  Fail…  Pend…  Skip…
             ┌────────────────────────────────────────────────────────────────────────────┐
             │ ✔ Card.spec.js                    00:19      5      5      -      -      - │
             ├────────────────────────────────────────────────────────────────────────────┤
             │ ✔ LeftControl.spec.js             00:13      3      3      -      -      - │
             ├────────────────────────────────────────────────────────────────────────────┤
             │ ✔ Login.spec.js                   00:17      5      5      -      -      - │
             ├────────────────────────────────────────────────────────────────────────────┤
             │ ✔ Upload.spec.js                  00:18      6      6      -      -      - │
             └────────────────────────────────────────────────────────────────────────────┘
               All specs passed!                 01:08     19     19      -      -      -













