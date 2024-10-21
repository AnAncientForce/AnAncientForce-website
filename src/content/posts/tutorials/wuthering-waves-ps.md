---
title: Wuthering Waves PS
published: 2024-10-20
description: In this article, I explain how to setup a Wuthering Waves PS
tags:
  - Gacha
category: Tutorials
draft: false
---

# Notes
* Note: Tested on 20/10/2024, may not work in the future but will give a general idea of how to setup a PS
* I made this guide because [this guide](https://git.xeondev.com/Shorekeeper/Shorekeeper) was missing a few important steps.
* This tutorial is for Microsoft Windows, and assumes you're familiar with the OS.
* You should create a folder for where you would like to store your PS. **This will now be your PS folder**.
* *My personal use case for this was to take screenshots of `Camellya` to use as a dataset for my [LoRA](https://civitai.com/models/876351/camellya-wuthering-waves)*

# Obtaining the 1.4 Launcher Installer and patched `launcher.exe`

1. Download the 1.4 launcher  [installer.exe](https://pcdownload-huoshan.aki-game.com/pcstarter/prod/starter/10008_Pa0Q0EMFxukjEqX33pF9Uyvdc8MaGPSz/G152/1.6.1.0/lrXV5DtqdqnCMFAqMctsXWmZyjLeZxHF/installer.exe)
2. Download the patched [launcher.exe](https://cdn.discordapp.com/attachments/1283475673788452978/1295007799373332510/launcher.exe?ex=6717a17f&is=67164fff&hm=4fad5195392bf58e31f20aad12b6a7328ab5c2c9b29f92ffa7ae4ca7bc1795d9&)
3. Open the 1.4 `installer.exe`
4. Set the directory to your PS folder.
5. Inside the newly created `Wuthering Waves(Beta)` folder, replace `launcher.exe` with the patched one that you just downloaded.
6. Run the `launcher.exe` and install the game as normal.

The 1.4 beta is now obtainable ✔️

# Preparing the game patch (`.dll`)

1. Install [7-Zip](https://7-zip.org/a/7z2408-x64.exe), please use this for extracting zipped archives.
2. Download the [patch files](https://git.xeondev.com/xeon/camellya-patch/releases/download/0.4.0/camellya-patch-win64.zip)
3. Extract the zip file and open the extracted folder.
4. Inside the folder, you will find `camellya-cn_beta_1_4_0.dll`
5. Rename the file to `camellya.dll`
6. Copy the file into `Wuthering Waves(Beta)\Wuthering Waves Game\Client\Binaries\Win64`
7. Create a file called `libraries.txt` and paste `camellya.dll` into the file as plain text and hit `CTRL+S`
8. Download [VersionShim.dll](https://github.com/Xpl0itR/VersionShim/releases/download/1.1.0/VersionShim.dll)
9. Rename the file to `winhttp.dll`. The reason we do this is because `version.dll` is detected by the `AntiCheatExpert`


You should now have all 3 new files in `Wuthering Waves(Beta)\Wuthering Waves Game\Client\Binaries\Win64`

* `camellya.dll`
* `libraries.txt`
* `winhttp.dll`

# Preparing the game patch (`.pak`)

1. Download [1](https://git.xeondev.com/Shorekeeper/shorekeeper-pak/releases/download/1.3.0_1.3.9/1.3.0_1.3.9.7z.001), [2](https://git.xeondev.com/Shorekeeper/shorekeeper-pak/releases/download/1.3.0_1.3.9/1.3.0_1.3.9.7z.002), [3](https://git.xeondev.com/Shorekeeper/shorekeeper-pak/releases/download/1.3.0_1.3.9/1.3.0_1.3.9.7z.003)
2. Once these files have downloaded, multiselect all of them, right click one of them and from the context menu navigate to `7-Zip` > `Extract to "*\"`
3. In the newly extracted folder you should see two folders `Main` and `Update`
4. Navigate to the `Main` folder, select `debugon_100_p.pak` and copy the file into `Wuthering Waves(Beta)\Wuthering Waves Game\Client\Content\Paks`

The game client should now be  patched ✔️

# Installing the PS Dependencies

Let's start by installing the necessary  build dependencies.

1. Download and install [Rust](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe)
2. Download and install [PostgreSQL](https://sbp.enterprisedb.com/getfile.jsp?fileid=1259174)
	1. Follow the setup wizard
	2. During the installation, you will need to provide a password. Please remember this password. It can be anything.
	3. Press `Win + R`, type `%APPDATA%` and press enter.
	4. If you do not see a folder called `postgres`; press `CTRL+SHIFT+N` to create a new folder, name it `postgres`.
	5. Inside the `postgres` folder, create a new `.conf` file called `pgpass.conf`

3. Download and install [Protoc](https://github.com/protocolbuffers/protobuf/releases/download/v28.2/protoc-28.2-win64.zip)
	1. Extract the compressed zip folder  to `C:\`
	2. Press `Win + R`, type `sysdm.cpl` and press enter.
	3. Navigate to the `Advanced` tab and click `Environment Variables`.
	4. Near the bottom you will see `System Variables`, scroll down until you see `Path`.
	5. Select `Path`, and click `Edit`
	6. Click `New`
	7. Paste: `C:\protoc-29.0-rc-1-win64\bin` into the new field.
	8. Click `Ok`, `OK`, `OK`, via all 3 popup windows.


Not required, but recommended for ease of use: Install `Windows Terminal`. Open a terminal and run the following command:
```
winget install --id=Microsoft.WindowsTerminal  -e
```

# Setting up the PS

In `pgAdmin 4`, from the top left menu: 
* Click `Servers`
	* Click `PostgreSQL 17`
		* Right click `Databases`
			* Create a new database called `shorekeeper`

Open Windows Terminal and open a Power Shell terminal.

Set the working directory to your PS folder
```
cd "YOUR_PS_DIRECTORY"
```

Clone the `Shorekeeper` repository
```
git clone https://git.xeondev.com/Shorekeeper/Shorekeeper.git
```

CD into the `Shorekeeper` directory
```
cd Shorekeeper
```

For each cargo command:
1. Duplicate the previous terminal tab
2. Set the working directory (`cd "YOUR_PS_DIRECTORY/Shorekeeper"`)
3. Run the cargo command

```
cargo run --bin config-server
```

```
cargo run --bin hotpatch-server
```

```
cargo run --bin login-server
```

```
cargo run --bin gateway-server
```

```
cargo run --bin game-server
```

You should get multiple authentication errors, we can fix them now.

1. Open `loginserver.toml` and enter the password you chose earlier (`password = ""`).

2. Open `gateway.toml` and enter the password you chose earlier (`password = ""`).

3. Open `gameserver.toml` and enter the password you chose earlier (`password = ""`).

4. Re-execute the commands that failed from the previous step. You can use the `up arrow key` to see previous commands that you executed.

Once all commands are running successfully, we can continue onto the next step.

# Launching the game

Run the `launcher.exe` in the `Wuthering Waves(Beta)` folder. 

Whenever you want to use the PS, remember to:
1. Open `pgAdmin 4` and click the `shorekeeper` database to activate it
2. Run all cargo commands and ensure each one executes successfully