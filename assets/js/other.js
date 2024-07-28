document.getElementById("form-btn").addEventListener("click", e => {
    e.preventDefault()

    const form = document.getElementById("form-sub")
    let data = new FormData(form)
    const transformData = [...data.values()]
    if(transformData.every(k => k === "")) {
        alert("Please fill in all fields")
        return;
    }
    alert("Thank you, your form was submitted")
    form.reset()
})