export default {
    _links: {
        self: {
            href: "/v1/public/providers?page=1{size,sort}"
        },
        next: {
            href: "/v1/public/providers?page=2{size,sort}"
        },
        prev: {
            href: "/v1/public/providers?page=0{size,sort}"
        }

    },
    _embedded: {
        publicProviderResourceList: [
        {
            description: "Verizon Wireless",
            name: "Verizon",
            createdDate: "2015-09-02T17:25:51.000+0000",
            lastModified: "2015-09-02T17:25:51.000+0000",
            loginFailuresReported: true,
            url: "http://vzw.com",
            requiredFields: [ "username", "password", "password2" ],
            _links: {
                self: {
                    href: "/v1/public/providers/1e60a473-7f13-d8f2-a038-22000b109b8b"
                },
                extract: {
                    href: "/v1/public/providers/1e60a473-7f13-d8f2-a038-22000b109b8b/pdrs"
                },
                industries: {
                    href: "/v1/public/providers/1e60a473-7f13-d8f2-a038-22000b109b8b/industries"
                }
            }
        },
        {
            description: "Verizon Wireless",
            name: "Verizon 2",
            createdDate: "2015-09-02T17:25:51.000+0000",
            lastModified: "2015-09-02T17:25:51.000+0000",
            loginFailuresReported: true,
            url: "http://vzw.com",
            requiredFields: [ "username", "password", "password2" ],
            _links: {
                self: {
                    href: "/v1/public/providers/1e60a473-7f13-d8f2-a038-22000b109b8b"
                },
                extract: {
                    href: "/v1/public/providers/1e60a473-7f13-d8f2-a038-22000b109b8b/pdrs"
                },
                industries: {
                    href: "/v1/public/providers/1e60a473-7f13-d8f2-a038-22000b109b8b/industries"
                }
            }
        }
        ]
    },
    page: {
        size: 10,
        totalElements: 1,
        totalPages: 1,
        number: 0
    }
}