$package("operationLog");
operationLog = {
    initOperationLog: function(){
        this.obj = {
            operateLogTable: $("#operateLogTable"),
            searchBtn: $("#searchBtn"),
            resetBtn: $("#resetBtn"),
            operateUser: $("#operateUser"),
            operateContent: $("#operateContent"),
            operateResSel: $("#operateResSel")
        };
        this.initDom();
        this.initEvent();
    },
    initDom: function(){
        var self = this;
        self.obj.operateLogTable.bootstrapTable({
            method: 'POST',
            url: wwwroot + '/logManage/operationLog',
            toolbar: '#toolbar',
            height:$(window).height()-100,
            striped: false, // 是否显示行间隔色
            cache: false,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            /*leftFixedColumns:true,
            leftFixedNumber:2,*/
            uniqueId: "id",
            pageSize: 20,
            pageList: [20],  //pageList: [10, 25, 50, 100],
            pagination: true, // 是否分页
            sortable: false, // 是否启用排序
            sidePagination: "server",
            onlyInfoPagination:false,
            paginationPreText: "上一页",
            paginationNextText: "下一页",
            columns: [{
                field: 'operateUser',
                title: '操作人',
                width: 200
            }, {
                field: 'operateContent',
                title: '操作内容',
                width: 500
            }, {
                field:"operateTime",
                title:"操作时间",
                width: 400
            }, {
                field: 'operateResult',
                title: '操作结果',
                width: 100,
            },{
                field: 'operateDesc',
                title: '操作描述',
                width: 800
            }]
        })
    },
    initEvent: function(){
        var self = this;
        self.obj.searchBtn.unbind().bind("click", function(){
            // TODO 调接口
            self.obj.operateLogTable.bootstrapTable("refresh");
        });
        self.obj.resetBtn.unbind().bind("click", function(){
            self.obj.operateUser.val("");
            self.obj.operateContent.val("");
            self.obj.operateResSel.val("");
            self.obj.operateLogTable.bootstrapTable("refresh");
        })
    }
};
$(function(){
    operationLog.initOperationLog();
})