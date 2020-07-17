# W03-D04-HW

## Installing MongoDB and Postman

## MacOS installation

### Install Homebrew

Confrim that you have Homebrew installed first by running the following:

```
brew 
```

If you see info related to brew than its already installed, but if not install brew using the command below:

```text
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
### Install mongodb-community edition with brew
```text
brew tap mongodb/brew
```

If you receive the following error:

![error](https://i.imgur.com/lC0219G.png)

Then run the following command:

```
sudo chown -R $(whoami) $(brew --prefix)/*
```

Once that completes rerun:

```text
brew tap mongodb/brew
```

And once that is complete run the following commands one at a time.
```
brew install mongodb-community
brew services start mongodb-community
```

Check if the Mongo service is running
```text
brew services list
```

You should see an output similar to this.
```text
Name              Status  User   Plist
mongodb-community started suresh /Users/suresh/Library/LaunchAgents/homebrew.mxcl.mongodb-community.plist
```


Create the folder mongo will be using to store your databases
```text
mkdir -p usr/local/var/mongodb/data/db
```

In a new tab in Terminal, run the following:
```text
mongod --dbpath /users/$(whoami)/data/db/
```

You should see an output similar to this.
```text
2020-04-03T10:26:57.365-0400 I  CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2020-04-03T10:26:57.416-0400 I  CONTROL  [initandlisten] MongoDB starting : pid=47604 port=27017 dbpath=/users/suresh/data/db/ 64-bit host=Sureshs-Mac-mini.local
2020-04-03T10:26:57.416-0400 I  CONTROL  [initandlisten] db version v4.2.3
2020-04-03T10:26:57.416-0400 I  CONTROL  [initandlisten] git version: 6874650b362138df74be53d366bbefc321ea32d4
2020-04-03T10:26:57.416-0400 I  CONTROL  [initandlisten] allocator: system
2020-04-03T10:26:57.416-0400 I  CONTROL  [initandlisten] modules: none
2020-04-03T10:26:57.416-0400 I  CONTROL  [initandlisten] build environment:
2020-04-03T10:26:57.416-0400 I  CONTROL  [initandlisten]     distarch: x86_64
2020-04-03T10:26:57.416-0400 I  CONTROL  [initandlisten]     target_arch: x86_64
2020-04-03T10:26:57.416-0400 I  CONTROL  [initandlisten] options: { storage: { dbPath: "/users/suresh/data/db/" } }
2020-04-03T10:26:57.514-0400 E  STORAGE  [initandlisten] Failed to set up listener: SocketException: Address already in use
2020-04-03T10:26:57.514-0400 I  CONTROL  [initandlisten] now exiting
2020-04-03T10:26:57.514-0400 I  CONTROL  [initandlisten] shutting down with code:48
```
This is good news, mongod just starts up a mongo server locally. NOTE: you need this running in order to use the mongo cli.


## Windows installation

Download the MongoDB Community MSI installer from the following link

https://www.mongodb.com/download-center/community?tck=docs_server

- In the Version dropdown, select the version of MongoDB to download.
- In the OS dropdown, select Windows x64.
- In the Package dropdown, select MSI.
- Click Download.

### Run the MongoDB installer 
Follow the MongoDB Community Edition installation wizard

### Choose Setup Type
You can choose either the Complete (recommended for most users) or Custom setup type. The Complete setup option installs MongoDB and the MongoDB tools to the default location. The Custom setup option allows you to specify which executables are installed and where.

### Create database directory
Create the data directory where MongoDB stores data. MongoDB’s default data directory path is the absolute path \data\db on the drive from which you start MongoDB.

```text
cd C:\
md "\data\db"
```

```text
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db"
```

### Connect to MongoDB

```text
"C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
```

[Additional windows support](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)


## Installing Postman
Download and install the [Postman Application](https://www.postman.com/downloads/)
