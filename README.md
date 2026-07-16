# Chess Game - JavaScript Implementation
A fully functional chess game made with HTML, CSS, JS using JQuery. This webapp includes all standard chess rules including castling, pawn promotion, and turn base play

---

## Features
### Game Play
- **Complete Chess Logic:** All standard chess piece movements implemented
- **Castling Support:** King-side castling implemented for both players
- **Pawn Promotion:** Choose between Queen, Rook, Bishop, or Knight when a pawn reaches the end
- **En Passant:** Full en passant capture support
- **Check & Checkmate Detection:** Visual indicators when a king is in check or checkmate
- **Draw Detection:** Automatically detects stalemate, insufficient material, fifty-move rule, and threefold repetition
### User Interface
- **Interactive UI:** Click-based piece selection and movement
- **Legal Move Highlighting:** All legal moves for a selected piece are highlighted in green with a subtle animation
- **Turn Management:** Visual indicator showing whose turn it is with color-coded feedback
- **Chess Clock:** Built-in 10-minute timer per player with:
  - Active player highlighting
  - Low-time warning (red flashing when under 1 minute)
  - Auto-loss when time runs out
- **Responsive Design:** Works on different screen sizes
- **Visual Feedback:** Hover effects, animations, and turn transitions
- **New Game Button:** Quickly restart the game with one click
### Layout
- **Sidebar Interface:** Clean layout with board on the left and game controls on the right
- **Turn Indicator:** Prominently displayed in the sidebar
- **Chess Clock:** Shows time remaining for both players
- **New Game Button:** Easy access to restart

---

## Technology Used
 - HTML 5
 - CSS 3
 - JavaScript (ES6)
 - jQuery 3.7.1

---

## Installation
1. Clone the repo: [git link](https://github.com/Chloe-Larsen/Chess-App)
2. Open page.html in your web browser
No additional dependencies or build tools required!

---

## How to Play
### Basic Controls
1. **Starting the Game:** The game begins with White's turn. The turn indicator at the bottom shows "It's Whites Turn".
2. **Selecting a piece:** Click on any of your pieces. Valid moves will be highlighted in green.
3. **Moving a piece:** Click on a highlighted square to move your selected piece there.
4. **Capturing Pieces:** To capture an opponent's piece, click on a highlighted square that contains an opponent's piece.
5. **Turn Indicator:** The turn indicator will flash and update after each move.
6. **Deselecting:** Click on the same piece again or click on another of your pieces to change selection.

### Special Moves
- **Castling:** Move your king two squares toward a rook that hasn't moved, and the rook will automatically move to the other side of the king.
- **Pawn Promotion:** When a pawn reaches the opposite end of the board, a dialog will appear allowing you to choose between Queen, Rook, Bishop, or Knight.
- **En Passant:** If an opponent's pawn moves two squares from its starting position and lands next to your pawn, you can capture it as if it had only moved one square.

### Game End Conditions
- **Checkmate:** The game ends with "CHECKMATE! [Color] Wins!"
- **Stalemate:** Draw declared when a player has no legal moves but is not in check
- **Insufficient Material:** Draw declared when there aren't enough pieces to force checkmate
- **Fifty-Move Rule:** Draw declared after 50 moves without a pawn move or capture
- **Threefold Repetition:** Draw declared when the same position occurs three times
- **Time Out:** Player loses if their clock reaches 0:00

Original Idea From [Project Ideas And Resources - The Cool Coders](https://github.com/The-Cool-Coders/Project-Ideas-And-Resources)