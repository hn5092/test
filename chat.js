//**
// * Created by imad on 7/31/2015.
// */
//
//myapp = angular.module('chart',["chart.js"])
//myapp.controller("myctr",function($scope){
//        $scope.cpuLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
//        $scope.cpuSeries = ['Series A', 'Series B'];
//
//        $scope.cpuData = [
//            [65, 59, 80, 81, 56, 55, 40],
//            [28, 48, 40, 19, 86, 27, 90]
//        ];

//
//})
angular.module("app", ["chart.js"])
    // Optional configuration
    .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#FF5252', '#FF8A80'],
            responsive: false

        });
        // Configure all line charts
        ChartJsProvider.setOptions('Line', {
            datasetFill: false
        });
    }]).controller("LineCtrl", ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.labels = ['xmy1', 'xym2', 'xym3', 'xym4', 'xym5', 'xym6'];
        $scope.cpuSeries = ['us','sy', 'id','wa' ];
        $scope.memSeries = ['total','used','free','buffers'];
        $scope.cpuData = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]

        ];
        $scope.memData = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        var ws = new WebSocket("ws://localhost:99");
        $scope.send = function(){
            console.log(1111);
            ws.send($scope.in);
            $scope.in=''
        };
        ws.onopen = function()
        {
            console.log("open");
            ws.send("hello");
        };
        ws.onmessage = function(evt)
        {
            console.log(evt.data);
            data  = evt.data.split(":");
            console.log(data);
            if(data[0] == "cpu"){
            $scope.cpuData[0][data[1][data[1].length-1]-1]=Number(data[2]);
            $scope.cpuData[1][data[1][data[1].length-1]-1]=Number(data[3]);
            $scope.cpuData[2][data[1][data[1].length-1]-1]=Number(data[4]);
            $scope.cpuData[3][data[1][data[1].length-1]-1]=Number(data[5]);
            $scope.$apply();
            }else if (data[0] == "mem" ){
            $scope.memData[0][data[1][data[1].length-1]-1]=Number(data[2]);
            $scope.memData[1][data[1][data[1].length-1]-1]=Number(data[3]);
            $scope.memData[2][data[1][data[1].length-1]-1]=Number(data[4]);
            $scope.memData[3][data[1][data[1].length-1]-1]=Number(data[5]);
            $scope.$apply();
            }


            //$scope.cpuData[1][data[0][data[0].length-1]-1]=data[1]
            //$scope.cpuData[2][data[0][data[0].length-1]-1]=data[2]
        };
        ws.onclose = function(evt)
        {
            console.log("WebSocketClosed!");
        };
        ws.onerror = function(evt)
        {
            console.log("WebSocketError!");
        };
        //$scope.cpuLabels = ["January", "February", "March", "April", "May", "June", "July"];
        //$scope.cpuSeries = ['Series A', 'Series B'];
        //$scope.cpuData = [
        //    [65, 59, 80, 81, 56, 55, 40],
        //    [28, 48, 40, 19, 86, 27, 90]
        //];
        //$scope.onClick = function (points, evt) {
        //    console.log(points, evt);
        //};
        //
        //// Simulate async data update
        //$timeout(function () {
        //    $scope.cpuData = [
        //        [28, 48, 40, 19, 86, 27, 90],
        //        [65, 59, 80, 81, 56, 55, 40]
        //    ];
        //}, 3000);
    }]);
/**
 * Created by imad on 7/31/2015.
 */
//
//myapp = angular.module('chat',[])
//myapp.controller("myctr",function($scope){
//
//    var ws = new WebSocket("ws://localhost:99");
//    $scope.send = function(){
//        ws.send($scope.in)
//        $scope.in=''
//    }
//    ws.onopen = function()
//    {
//        console.log("open");
//        ws.send("hello");
//    };
//    ws.onmessage = function(evt)
//    {
//        console.log(evt.data)
//        if(evt.data!="") {
//            $scope.out = evt.data
//            $scope.$apply()
//        }
//    };
//    ws.onclose = function(evt)
//    {
//        console.log("WebSocketClosed!");
//    };
//    ws.onerror = function(evt)
//    {
//        console.log("WebSocketError!");
//    };
//
//})

