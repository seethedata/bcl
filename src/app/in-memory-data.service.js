var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true },
            { name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true },
            { name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true },
            { name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true }
        ];
        var leases = [
            { product: { name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true },
                duration: 36,
                assigned: false
            },
            { product: { name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true },
                duration: 48,
                assigned: false
            },
            { product: { name: 'VMAX950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true },
                duration: 60,
                assigned: false
            },
            { product: { name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true },
                duration: 48,
                assigned: true },
            { product: { name: 'VMAX950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true },
                duration: 36,
                assigned: true
            }
        ];
        var securities = [
            { name: 'The First Security',
                leases: [
                    { product: { name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true },
                        duration: 48,
                        assigned: true
                    },
                    { product: { name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true },
                        duration: 48,
                        assigned: true
                    },
                    { product: { name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true },
                        duration: 48,
                        assigned: true
                    }
                ],
                owners: [
                    { name: 'John S', share: 25 },
                    { name: 'Jane D', share: 25 },
                    { name: 'Rich R', share: 25 },
                    { name: 'Steve A', share: 25 },
                ],
                completed: true
            },
            { name: 'Second Security',
                leases: [
                    { product: { name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true },
                        duration: 48,
                        assigned: true
                    },
                    { product: { name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true },
                        duration: 48,
                        assigned: true
                    }
                ],
                owners: [
                    { name: 'John S', share: 10 },
                    { name: 'Jane D', share: 70 },
                    { name: 'Rich R', share: 20 }
                ],
                completed: true
            },
            { name: 'A New Security',
                leases: [
                    { product: { name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true },
                        duration: 48,
                        assigned: true
                    },
                    { product: { name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true },
                        duration: 48,
                        assigned: true
                    }
                ],
                owners: [],
                completed: false
            },
        ];
        return { products: products, leases: leases, securities: securities };
    };
    return InMemoryDataService;
}());
export { InMemoryDataService };
//# sourceMappingURL=in-memory-data.service.js.map