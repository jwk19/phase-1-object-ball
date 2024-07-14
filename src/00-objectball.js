// lets create the gameObject function that function that creates and returns the nested object with all the specified data

function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Call the gameObject function to check the structure
console.log(gameObject());

//creating function numPointsScored

function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
    return null; // Player not found
}

console.log(numPointsScored("Alan Anderson")); // 22

// creating function shoeSize
function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
    return null; // Player not found
}

console.log(shoeSize("Alan Anderson")); // 16

// creating function teamColors

function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null; // Team not found
}

console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]

// creating function teamNames

function teamNames() {
    const game = gameObject();
    return Object.keys(game).map(team => game[team].teamName);
}

console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]

// create function teamName

function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
    return null; // Team not found
}

console.log(playerNumbers("Brooklyn Nets")); // [0, 30, 11, 1, 31]

//creating function playerStats

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null; // Player not found
}

console.log(playerStats("Alan Anderson"));

//creating function bigShoeRebounds

function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].shoe > maxShoeSize) {
                maxShoeSize = game[team].players[player].shoe;
                rebounds = game[team].players[player].rebounds;
            }
        }
    }

    return rebounds;
}

console.log(bigShoeRebounds()); // 12 (Mason Plumlee)


//creating function mostPointsScored

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMaxPoints = '';

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].points > maxPoints) {
                maxPoints = game[team].players[player].points;
                playerWithMaxPoints = player;
            }
        }
    }

    return playerWithMaxPoints;
}

console.log(mostPointsScored()); // Ben Gordon

//creating function winningPoints

function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (const player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    for (const player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

console.log(winningTeam()); // Charlotte Hornets

//creating function playerWithLongestName

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';

    for (const team in game) {
        for (const player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }

    return longestName;
}

console.log(playerWithLongestName()); // Brendan Haywood

//creating function doesLongNameStealATon

function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    const game = gameObject();
    let maxSteals = 0;

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].steals > maxSteals) {
                maxSteals = game[team].players[player].steals;
            }
        }
    }

    return game.home.players[longestNamePlayer]?.steals === maxSteals || game.away.players[longestNamePlayer]?.steals === maxSteals;
}

console.log(doesLongNameStealATon()); // True







