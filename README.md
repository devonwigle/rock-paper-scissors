# Grandparents, Parents, Children (Rock, Paper, Scissors)

I created an application that allows the user to play the family version of rock, paper, scissors.  You can choose from the children, the parents, the grandparents, the dog or the cat. The goal was to create DRY JavaScript, localStorage to persist data and event delegation. Understand the difference between the data model and how data is displayed in the dom.

# Set-up Instructions
If you want to see the code follow this guide, otherwise go to instructions for use.

  * Fork this repository to your Github account
  * Clone the repository to your local machine
  * `cd` into the project
  * Open in your text editor
  * Read this README thoroughly.

# Instructions for use

Starting on the opening the page, you can choose between classic and difficult options.
<img width="1439" alt="Opening screen" src="https://user-images.githubusercontent.com/88619501/142078850-b5fc8b08-8376-4702-8fae-181b5a0b9bc2.png">
Here you can see the classic options.
<img width="1440" alt="Classic" src="https://user-images.githubusercontent.com/88619501/142078853-f9739771-1be2-478f-b01a-ec3bea0db14c.png">
After you select an option you will see your character appear under your choice. Then the screen will proceed to the options to allow you to play once again. If you wish to change difficulty you can now do so by pressing the change difficulty button on the left side.
<img width="1439" alt="change difficulty" src="https://user-images.githubusercontent.com/88619501/142078856-f4f8c1c2-46c7-432c-b7b3-60e3190a97b2.png">
Here are the options available to the difficult level.  Also note here that wins track across the games.
<img width="1440" alt="Difficult " src="https://user-images.githubusercontent.com/88619501/142078848-ccbc62e5-a4e8-4a55-9612-4c93e30eb960.png">

# Future Features

* A clear localStorage button
* player choice of icon and name

# Contributor

[Devon Wigle](https://github.com/devonwigle)

# Technologies Used
  * Atom
  * Terminal
  * Github
  * Chrome
  * Languages
    * HTML
    * CSS
    * JavaScript

# Reflections
The first step and challenge was to understand what was wanted by the spec sheet. I knew I needed a game class constructor, a player class constructor and the main javascript files as well as a style sheet and index.html.  After those basics I floundered a bit for how to proceed.  I started to build out the general look of the page and connect basic buttons to different page views. Eventually I found a flow that took me to a nearly finished product a couple days before the project was due. Then there was the tokens... These were the biggest challenge for me after getting started. They work now so that is a win, but in order to get them to work within my understanding, some best practices such as naming conventions were broken to make things work. But it is functional.
