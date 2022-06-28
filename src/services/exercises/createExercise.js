

export const createExercise = async (exerciseData) => {
    const url = 'http://127.0.0.1:8000/activities/create-exercise/'
    const response = await fetch(url, {
        method: 'post',
        headers: {
            token: 'token HERE'
        },
        body: JSON.stringify(exerciseData)
    })
    const exercise = await response.json()
    
    return exercise

}