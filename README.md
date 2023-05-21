Crypto-polyfills is a polyfills collection to fix build and runtime failures caused by the different versions of crypto implemented on nodejs and browses.  

## Objectives
- Create getRandomValues function to fix build failures with dependencies like uuidv4

## Usage
Simply import the file where the polyfill is needed, or in your index file
> import 'crypto-polyfills';