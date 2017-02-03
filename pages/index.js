Page({
    data: {
        list: [
            {
                id: 'it',
                name: 'IT Management',
                open: false,
                pages: ['Inventory', 'Leaver', 'Check-out', 'Check-in']
            },
            {
                id: 'admin',
                name: 'Admin Management',
                open: false,
                pages: ['Event', 'Meeting', 'Annual Dinner', 'Office Stationery']
            },
            {
                id: 'data',
                name: 'Data',
                open: false,
                pages: ['Upload', 'Download', 'Import', 'Export']
            },
            {
                id: 'tool',
                name: 'Tools',
                open: false,
                pages: ['Contact information', 'Tech support']
            },
            {
                id: 'search',
                name: 'Search',
                open: false,
                pages: ['Search']
            }
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});
