---
title: Floating Dungeon of Mist and Sand
published: 2024-04-19
description: A 3D horror game that I created for a college assignment
tags:
  - Godot
category: Creations
draft: false
---

_pictured as a floating dungeon made from sand and surrounded by mist, which will be a horror-themed maze game. A enemy will be chasing you throughout the maze._

![image](src/assets/images/maze_game/20240428125309.png)

#### Plot

- You've just woken up. As high as the clouds. In fact, in the clouds. You're terrified of heights so you try not to look outside.
- You come to the conclusion that you are in a mysterious floating pyramid made from sand and mist. Which is actually a dungeon in disguise.

---

#### Game Details

- Game Engine: Godot
- Game Type: 3D
- Game Style: Maze
- Game Genre: Horror
- Game Duration: Up to 30 minutes
- Game Name: "Floating Dungeon of Mist and Sand"

#### Characters, Objects

- `Deathlocker`, a deadly-ninja-type-being that can kill almost instantly.
- `Spiritlock`, a one-of-a-kind magical item that harnesses the ability to break a Deathlocker's isolation seal. Ancient Guard Doors commonly use this seal. These can be found within the maze.
- `Safe Zone`, a small room to hide in which is hidden from a `Deathlocker`'s vision.
- `Mysterious Energy`, a powerful type of energy emitted from the pyramid. It is known to be dangerous to humankind.
- `Mysterious-Being`, a invisible-being who has been summoned alongside you. They will talk to you at random intervals within the maze, it'll either be hints or random-talk.
- `Ancient Guard Door`, a door that can only be opened with a `Spiritlock`. These can be found within the maze.

#### Development

The game consists of:

- Introduction Scene
  - Dialogue
- Maze Scene (Game)
  - 3D
    - The Maze
      - Wall
      - Safe Zone
        - Interactive Door
      - AI Patrol Waypoints
      - Spiritlock (Crystal / Collectable)
      - Ancient Guard Door (Maze Exit)
    - Player Controller
      - Sprint Mechanic
      - Ray-cast mechanic for interaction with various objects within the maze
    - AI
      - Chase Mechanic
      - Patrol Mechanic
  - UI
    - Objective
    - Dialogue
    - Visual Effects
- Ending Scene
  - Dialogue

#### Audio used:

- Music

  - Chase Theme
    - https://www.chosic.com/download-audio/24591/

- Sound Effects
  - https://mixkit.co/free-sound-effects/

#### Software used:

- [Microsoft Paint](https://en.wikipedia.org/wiki/Microsoft_Paint) for maze sketches.
- [Blender](https://www.blender.org/) for editing a 3D character.
- [Godot](https://godotengine.org/) as the Game Engine.
- [Obsidian](https://obsidian.md/) , a markdown editor for documenting the game's progress.
- [VRoidStudio](https://vroid.com/en/studio), for character creation.
- [Mixamo](https://www.mixamo.com/), for the AI Generated character animations.

---

# Screenshots

### Creating the doors on the safe houses

![image](src/assets/images/maze_game/20240422202910.png)

### Creating the maze

![image](src/assets/images/maze_game/20240422214755.png)

### Editing textures for the character model in VRoidStudio

![image](src/assets/images/maze_game/20240422154400.png)

### Editing the textures in Blender

![image](src/assets/images/maze_game/20240422155622.png)
![image](src/assets/images/maze_game/20240422155852.png)

### Rigging the weights for the character model in Mixamo

![image](src/assets/images/maze_game/20240422161144.png)

### Testing animations work correctly Blender, as well as giving them proper names.

![image](src/assets/images/maze_game/20240422163941.png)

### Coding the AI

![image](src/assets/images/maze_game/20240423165842.png)

### Continuing work on the maze

![image](src/assets/images/maze_game/20240423202830.png)

### Creating death scene

![image](src/assets/images/maze_game/20240424214822.png)

---

# [You can download the game here!](https://mega.nz/folder/StM0iJ4T#-_mvKSXN3k33uk3i4iQg5A)
