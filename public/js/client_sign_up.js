// FRONT-END (CLIENT) JAVASCRIPT HERE

const submit_sign_up = async function(event) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()

  // get form fields
  const email = document.querySelector("#inputEmail")
  const first_name = document.querySelector("#inputFirstName")
  const last_name = document.querySelector("#inputLastName")
  const password = document.querySelector("#inputPassword")
  // parse into json
  json = { 
    email: email.value,
    first_name: first_name.value,
    last_name: last_name.value,
    password: password.value
  }

  body = JSON.stringify(json)
  // request POST to server
  const response = await fetch( "/signup", {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body 
  })

  // handle response
  const text = await response.text()
  console.log( "text:", text )
}

