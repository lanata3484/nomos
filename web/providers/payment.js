'use strict';

angular
    .module('mmpApp')
    .factory('PaymentService1', ['$http', function ($http) {
        return {
            GetPayment: function(id) {
                return $http.get("/services/web/PaymentService1.svc/GetPayment?id=" + id)
                    .then(function(response) { return response.data; });
            },
            ListUserPayments: function(userid, page, size, columns, order, filters) {
                return $http.post("/services/web/PaymentService1.svc/ListUserPayments", { userid: userid, page: page, size: size, columns: columns, order: order, filters: filters })
                    .then(function(response) { return response.data; });
            },
            ListPayments: function(page, size, columns, order, filters) {
                return $http.post("/services/web/PaymentService1.svc/ListPayments", { page: page, size: size, columns: columns, order: order, filters: filters })
                    .then(function(response) { return response.data; });
            }
        };
    }]);