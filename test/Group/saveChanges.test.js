const QuizGame = require("../../index")

test("should save changes in my group session", async () => {
    const session = "920390203"
    const newPlayer = {
        serialized: "82839283",
        name: "Fulano de tal",
        score: 0,
        moves: 0,
        hits: 0,
        errors: 0
    }

    const quizGame = new QuizGame() 

    const groupGetBySessionService = await quizGame.group.getBySession(session)
    if(!groupGetBySessionService.success) return console.error(groupGetBySessionService.message)

    groupGetBySessionService.data.players.push(newPlayer)

    const groupSaveChangesService = await quizGame.group.saveChanges(session, groupGetBySessionService.data)

    expect(groupSaveChangesService.success).toBe(true)
})
