* Feb 27, 2020 - How to turn all emails back on: 
    All are sent to either `/skipThisEmail\d/` or `end` or other pre-existing label, so:
    ```
    \*if:\s?skipEmails\s?=s?"on"
        *goto:\s?.*
    ```
    and 
    ```
    \*label:\sskipThisEmail\d
    ```
    In `uplift2-nextsession-schedule`, special case: 
    ```
    *if: skipEmails = "on"
        Great! I'll see you at {nextSessShorthand}.
        *goto: DDtime
    ```