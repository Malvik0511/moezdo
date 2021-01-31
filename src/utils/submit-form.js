export const submitForm = async(data) => {
    const response = await fetch('/test.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()

    return result
}