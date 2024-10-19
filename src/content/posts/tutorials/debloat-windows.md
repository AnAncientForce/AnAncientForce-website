---
title: Debloat Windows
published: 2024-05-09
description: In this article, I explain my process of debloating the windows operating system
tags:
  - Microsoft Windows
category: Tutorials
draft: false
---

**Note: Highly opinionated, but useful**

Have you ever wanted the perfect windows install? One that contains minimal bloatware and barely any telemetry from Microsoft? If so, I may have a solution for you! In this post I show you how I put together my perfect windows installation.

But the first question is of course, why not just use Linux? You see, many of the programs that I use are windows only, and for the most part, the Linux alternatives aren't as useable for me. Here are some of the programs that I use:

- Adobe Photoshop > GIMP, the user interface is too confusing.
- BrawlCrate > Not available on Linux.
- BlueStacks 5 > Waydroid, doesn't work for the games I play.
- Almost every anime game with anti-cheat > Not possible on Linux without breaking game's ToS.
- My wireless controller only works wirelessly with windows > Can't do anything about that one.

For these reasons, I have decided to stick with Microsoft Windows. I recently upgraded to Windows 11 for the file explorer multi-tab support. I have used various open source software to customize the windows installation to my liking, these include:

- [windows ltsc links](https://massgrave.dev/windows_ltsc_links)
- [winutil](https://github.com/ChrisTitusTech/winutil)
- [simplewall](https://github.com/henrypp/simplewall)
- [rufus](https://github.com/pbatard/rufus)
- [UnigetUI](https://github.com/marticliment/UnigetUI)
- [Open-Shell-Menu](https://github.com/Open-Shell/Open-Shell-Menu)
- [MAS](https://github.com/massgravel/Microsoft-Activation-Scripts)

Using these tools, I have acquired the perfect installation.

The installation is as follows:

1. Acquire your [Windows 11 IoT Enterprise LTSC ISO](https://massgrave.dev/windows_ltsc_links), we'll be using this ISO as it comes with the least amount of bloatware (only Microsoft Edge, I think). Once you have it downloaded we'll need to install [Rufus](https://github.com/pbatard/rufus), this program allows us to flash the windows ISO to a bootable USB stick whilst also patching the windows installer so it skips all of those annoying privacy questions.
2. Once you have successfully flashed your windows ISO, use the installation media to boot into your windows setup wizard. The process should be fairly automated once you have selected your storage devices.
3. Once windows has installed successfully, the first thing you should do is install [UnigetUI](https://github.com/marticliment/UnigetUI). This program will act as your package manager. Similar to Linux, but with a UI. To use it, simply type the name of the application you would like to install and click `Install`. That's all there is to it. You no longer need to navigate to various different websites to install your applications.
4. Once you have installed all of your applications, you should setup [simplewall](https://github.com/henrypp/simplewall). This is a firewall. To activate the firewall, click "Enable Filters" from the main window. Now, whenever an application tries to contact the internet, a dialog box will appear asking if you would like to allow the application to access the internet. You can either click "Allow", "Deny" or "Dismiss". If you click Allow the application will have full internet access. If you click Deny the application will not be able to access the internet. There will be a lot of times where the dialogs just appear out of nowhere, this is because Microsoft is contacting servers all of the time, you'll probably want to Deny all of these connections.
5. Guess what time it is? Our favorite time! Time to debloat windows! Now, there's an easy way to do this, simply open up a PowerShell window as an administrator and run the following:

```
irm "https://christitus.com/win" | iex
```

6. Once the toolbox has loaded, you'll want to select a preset to apply. Be sure to read all of the toggles so you know what each option will do. Creating a system restore point is highly recommended.

7. Optionally, if you would like to, you can install a different Start Menu, in fact a much better one! [Open-Shell](https://github.com/Open-Shell/Open-Shell-Menu) comes with an integrated control panel search. It may not look as nice, but it's a lot more functional than the default Start Menu.

8. [MAS](https://github.com/massgravel/Microsoft-Activation-Scripts), I can't say much here.

9. You should probably restart the computer after all of these changes.

Thanks to all of these amazing tools! Without them, if anything, I would probably just be using windows in a virtual machine [like I did back in the day](https://github.com/AnAncientForce/dotfiles).
