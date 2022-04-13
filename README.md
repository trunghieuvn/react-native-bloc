
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
## issue: error listen EADDRINUSE: address already in use :::8081.

```
  netstat -ano|findstr "PID :8081"
  
  taskkill /pid 5700 /f
  taskkill /pid 15088 /f
```

# Bloc pattern
- https://blac-docs.vercel.app/docs/blac-core/bloc-basics