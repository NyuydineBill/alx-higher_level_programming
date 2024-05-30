
$(document).ready(function() {
    function addItem() {
        let newElement = $('<li>Item1</li>');
            $('UL.my_list').append(newElement)
        }
        $('DIV#add_item').click(function() {
                addItem();
             })
    function deleteItem() {
        $('UL.my_list li:last-child').remove()
    } 
    $('DIV#remove_item').click(function() {
        deleteItem();
    })
    function clearList() {
        $('UL.my_list').empty()
    }
    $('DIV#clear_list').click(function (){
        clearList();
    })
    })

