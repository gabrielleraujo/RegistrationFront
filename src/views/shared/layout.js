export function loadHeader()
{
    document.querySelector("head").insertAdjacentHTML("afterend", `
    <header class="container row">
      <nav class="nav-bar row">
          <a>Ecommerce</a>
          <ul class="row">
              <li class="nav-item">
                  <a>Home</a>
              </li>
              <li class="nav-item">
                  <a>Register a Product</a>
              </li>
          </ul>
      </nav>
    </header>`);
}
