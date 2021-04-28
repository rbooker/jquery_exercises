
$(function() {
    $("#ratemovies").on("submit", function(evt) {
        evt.preventDefault();
        let title = $("#title").val();
        let hotOrNotRadioButtons = $("input[name='hotornot']").get();
        let hotOrNot = hotOrNotRadioButtons[0].checked ? "Hot" : "Not";
    
        let movieData = { title, hotOrNot };
        const HTMLtoAppend = createMovieDataHTML(movieData);
    
        $("#movielist").append(HTMLtoAppend);
        $("td").css("padding-right", "1em");
        $("#ratemovies").trigger("reset");
      });

      $("table").on("click", ".remove", function(evt) {

        // remove it from the DOM
        $(evt.target)
          .closest("tr")
          .remove();
        
      });
    });

    function createMovieDataHTML(data) {
        return `
          <tr>
            <td>${data.title}</td>
            <td>${data.hotOrNot}</td>
            <td>
              <button class="remove">
                Delete
              </button>
            </td>
          <tr>
        `;
      }