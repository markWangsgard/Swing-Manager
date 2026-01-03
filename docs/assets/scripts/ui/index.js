const dropdownElement = document.getElementById("choseLocation");
          dropdownElement.addEventListener("input", (e) => {
            e.preventDefault();
            const currentUrl = new URL(window.location.href);
            const params = currentUrl.searchParams;
            const newPath = currentUrl.pathname.includes("docs") ? `/docs/now-playing.html` : `/now-playing.html;`
            currentUrl.pathname = newPath;
            params.set("location", dropdownElement.value);

            console.log(currentUrl);
            window.location.assign(currentUrl.toString());
          });