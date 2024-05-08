export function SidePanel() {
    return (
        <div>
            <EmployMe />
            <div class="container">
                <OpenSourceLicenses />
                <p>
                    <a
                        style="color: black;"
                        target="_blank"
                        href="https://github.com/Eric-Edlund/TS-CAS"
                    >
                        Project Respository
                    </a>
                </p>
                <p>
                    <a
                        style="color: black;"
                        target="_blank"
                        href="https://crates.io/crates/ihateintegrals"
                    >
                        Rust Crate
                    </a>
                </p>
            </div>
        </div>
    )
}

function EmployMe() {
    return (
        <div class="green light-1 row white-text" style="padding: 0.4em">
            <img class="responsive-img circle col s4" src="Eric.jpg"></img>
            <div class="col s8 row">
                <h5 style="margin-bottom: 0">Employ me!</h5>
                <p style="margin-top: 0">
                    <a
                        target="_blank"
                        style="color: white"
                        href="https://www.linkedin.com/in/eric-edlund"
                    >
                        LinkedIn{" "}
                    </a>
                    |
                    <a
                        target="_blank"
                        style="color: white"
                        href="https://github.com/Eric-Edlund"
                    >
                        {" "}
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    )
}

function OpenSourceLicenses() {
    return (
        <p>
            <a
                style="color: black"
                target="_blank"
                href="https://github.com/Eric-Edlund/TS-CAS/blob/master/CREDITS.md"
            >
                Open Source Licenses
            </a>
        </p>
    )
}
