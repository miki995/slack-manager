$(function () {
    var jsonData = {
        'data': [
            {
                'text': 'Backups',
                'type': 'folder',
                'children': [
                    {
                        'text': '2020/5/2',
                        'type': 'folder'
                    },
                    {
                        'text': '2020/2/7',
                        'type': 'folder'
                    },
                    {
                        'text': '2020/7/1',
                        'type': 'folder'
                    }
                ]
            },
            {
                'text': 'Documents',
                'type': 'folder',
                'state': {
                    'opened': true,
                    'selected': true
                },
                'children': [
                    {
                        'text': 'Design Thinking Project',
                        'type': 'folder'
                    },
                    {
                        'text': 'User Research',
                        'type': 'folder'
                    },
                    {
                        'text': 'Important Documents',
                        'type': 'folder'
                    }
                ]
            },
            {
                'text': 'Music',
                'type': 'folder',
                'children': [
                    {
                        'text': 'Rock',
                        'type': 'folder',
                    },
                    {
                        'text': 'Classic',
                        'type': 'folder',
                    },
                    {
                        'text': 'Blues',
                        'type': 'folder',
                    }
                ]
            },
            {
                'text': 'Pictures',
                'type': 'folder',
                'children': [
                    {
                        'text': 'Child 1',
                        'type': 'folder',
                    },
                    {
                        'text': 'Child 2',
                        'type': 'folder',
                    }
                ]
            },
            {
                'text': 'Downloads',
                'type': 'folder',
                'children': [
                    {
                        'text': 'Child 1',
                        'type': 'folder',
                    },
                    {
                        'text': 'Child 2',
                        'type': 'folder',
                    }
                ]
            },
        ],
        themes: {
            dots: false
        }
    };

    $('#files').jstree({
        'core': jsonData,
        "types": {
            "folder": {
                "icon": "ti-folder text-warning",
            },
            "file": {
                "icon": "ti-file",
            }
        },
        plugins: ["types"]
    });

    var table = $('#table-files').DataTable({
        'columnDefs': [
            {
                'targets': 0,
                'className': 'dt-body-center',
                'render': function (data, type, full, meta) {
                    return '<div class="custom-control custom-checkbox">' +
                        '<input type="checkbox" class="custom-control-input" id="customCheck' + meta.row + '">' +
                        '<label class="custom-control-label" for="customCheck' + meta.row + '"></label>' +
                        '</div>';
                }
            },
            {
                "orderable": false,
                "targets": [0, 5]
            }
        ],
        'order': [1, 'asc']
    });

    $(document).on('click', '#files-select-all', function () {
        // Check/uncheck all checkboxes in the table
        var rows = table.rows({'search': 'applied'}).nodes();
        $('input[type="checkbox"]', rows)
            .prop('checked', this.checked);
        if (this.checked) {
            $('input[type="checkbox"]', rows).closest('tr').addClass('tr-selected');
            $('#file-actions').removeClass('d-none');
        } else {
            $('input[type="checkbox"]', rows).closest('tr').removeClass('tr-selected');
            if($('#table-files .custom-control-input:checked').length == 0){
                $('#file-actions').addClass('d-none');
            }
        }
    });

    $(document).on('click', '#table-files .custom-control-input', function () {
        if ($(this).prop('checked')) {
            $('#file-actions').removeClass('d-none');
            $(this).closest('td').closest('tr').addClass('tr-selected');
        } else {
            $(this).closest('td').closest('tr').removeClass('tr-selected');
            if($('#table-files .custom-control-input:checked').length == 0){
                $('#file-actions').addClass('d-none');
            }
        }
    });
});
