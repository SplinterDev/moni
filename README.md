# moni
A simple app to manage my finances

# Brainstorming

## Stories

| As a/an | I want to | So that |
| - | - | - |
| User | enter the transactions of my bank accounts | I can get better information from them |
| User | add tags to my transactions | I can later filter and group them by tag |
| User | create multiple accounts | my transactions are kept separately

## Entities

| Account |
| - |
| name: `String` |
| transactions: `[Transaction]` |

| Transaction |
| - |
| description: `String` |
| tags: `[String]` |
| value: `Number` |
| date: `Date` |

| Tag |
| - |
| name: `String` |