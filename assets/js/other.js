document.getElementById("form-btn").addEventListener("click", e => {
    e.preventDefault()

    const form = document.getElementById("form-sub")
    let data = new FormData(form)
    alert("Thank you, your form was submitted")
    form.reset()
})