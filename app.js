// app.js

// Core Game Engine
class GameEngine {
    constructor() {
        this.state = {};
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        console.log('Game started');
        this.update();
    }

    stop() {
        this.isRunning = false;
        console.log('Game stopped');
    }

    update() {
        if (!this.isRunning) return;
        // Update game state
        requestAnimationFrame(() => this.update());
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        console.log('State updated:', this.state);
    }
}

// State Management
const game = new GameEngine();
game.start();

game.setState({ level: 1, score: 0 });

game.setState({ score: 10 });
