
## Create 

```
npx react-native init AwesomeProject

npx react-native init AwesomeTSProject --template react-native-template-typescript
```

## Run Android

```
npx react-native start
npx react-native run-android
```

# Issue

REM issue: error listen EADDRINUSE: address already in use :::8081.
REM netstat -ano|findstr "PID :8081"
REM taskkill /pid 5700 /f
REM taskkill /pid 15088 /f