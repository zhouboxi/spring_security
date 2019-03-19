;
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    $.fn.ezVue = function (opt) {
        this.$element = this;
        var thisobj =  this.$element ;
        var compentName='flex';
        if($(thisobj).is("vue-pagelist")){
            //分页
            Vue.component("vue-pagelist",{
                props:['dataTableid'],
                template: '<div class="eztable-nav">'
                +'<div class="pagination-sm eztable-pageination" :id="[dataTableid+'+"'-nav'"+']">'
                +'</div>'
                +'<div class="eztable-info">'
                +'	<span :id="[dataTableid+'+"'-currentItemInfo'"+']"></span> 总共<span :id="[dataTableid+'+"'-allnum'"+']"></span> 条记录 <span :id="[dataTableid+'+"'-msgInfo'"+']"><!--附加信息--></span>'
                +' </div>'
                +'</div>'
            });
        }else if($(thisobj).is("vue-listbar")){
            //工具栏
            Vue.component("vue-listbar",{
                    props:['dataTableid','dataMessage','dataDelurl','dataAddurl','dataAddbuttonid','dataAddmodaltitle','dataParam','dataHidedefaultbtn'],
                    template: '<div class="ezheader-tools form-inline eztable-topbar">'
                    +' 	<span class="eztable-perpage">'
                    +'   <span class="pull-left">每页显示条数：</span>'
                    +'	  <select class="form-control input-sm" name="" :id="[dataTableid+'+"'pageSize'"+']">'
                    +'		<option value="10">10</option>'
                    +'		<option value="20">20</option>'
                    +'		<option value="50">50</option>'
                    +'		<option value="100">100</option>'
                    +'	  </select>'
                    +'	</span>'
                    +'	<span class="eztable-btnbar">'
                    +'<template v-if="dataHidedefaultbtn == undefined || dataHidedefaultbtn =='+"'true'"+'" >'
                    +'<a href="javascript:;" class="btn btn-danger btn-sm mr-5" data-toggle="eztable.batch" :data-target="['+"'#'"+'+dataTableid]" :data-message="[dataMessage]" :data-url="[dataDelurl]">批量删除</a>'
                    +'<a :id="[dataAddbuttonid]" :href="[dataAddurl]" class="btn btn-default btn-sm" data-width="700" data-height="500" data-target="#addModal" data-toggle="modal" :modal-title="['+"'新建'"+'+dataTitle]" data-backdrop="static">新建</a>'
                    +'</template>'
                    +'<template v-if="dataParam!=undefined">'
                    +'<a v-for="param in JSON.parse(dataParam)" :id="[param.id]" :href="[param.url]" :class="[param.class]" class="btn btn-default btn-sm ml-5" >{{param.text}}</a>'
                    +'</template>'
                    +'	</span>'
                    +'</div>',
                    data:function(){
                        var title = this.dataAddmodaltitle;
                        if(typeof(title)=='undefined'){
                            title = '';
                        }

                        return {dataTitle:title};
                    }
                }
            );
        }else if($(thisobj).is("vue-searchbar")){
            //搜索
            Vue.component("vue-searchbar",{
                props:['dataTableid','dataParam'],
                template: '<div id="_searchbar" class="panel-collapse" role="tabpanel" aria-labelledby="collapse-search">'
                +'  <div class="well eztable-searchbar">'
                +'		<form class="form-inline ez-searchbar-inline" data-toggle="eztable.search" data:data-target="['+"'#'"+'+dataTableid]">'
                +'			<div v-for="param in dataParam" class="form-group pl-15">'
                +'				<label for="input-name" v-if="param.titleIsShow == undefined || param.titleIsShow=='+"'true'"+'" class="control-label">{{param.name}}</label>'
                +'				<input class="form-control" id="input-name" :name="['+"'search[\\'CN_'"+'+param.searchName+'+"'\\']'"+']" :placeholder="'+"'请输入'"+'+[param.name]" type="text">'
                +'			</div>'
                +'			<button class="btn btn-primary mr-5 " type="submit">搜索</button>'
                +'			<button class="btn btn-default" type="reset">清除</button>'
                +'		</form>'
                +'	</div>'
                +'</div>'
            });
        }else if($(thisobj).is("vue-uedit")){
            //编辑器
            var readonlyTag = '';
            if($(thisobj)[0].getAttribute("readonly")!=null){
                readonlyTag = 'readonly="readonly"';
            }
            Vue.component("vue-uedit",{
                props:['dataId','name','nullmsg','dataOptions','dataType','dataEnableAutoSave','vueBind'],
                template:'<div>'
                +'<template v-if="dataType == undefined || dataType =='+"''"+'" >'
                +'<textarea type="text/plain" :id="[dataId]" :data-id="[dataId]" data-toggle="ezui.editor" '+readonlyTag+' :data-textarea="[name]" :name="[name]" :nullmsg="[nullmsg]"  :data-options="[dataOptions]" :data-enableAutoSave="[dataEnableAutoSave]" >{{vueBind}}</textarea>'
                +'</template>'
                +'<template v-else>'
                +'<textarea type="text/plain" :id="[dataId]" :data-id="[dataId]" data-toggle="ezui.editor" '+readonlyTag+' :data-textarea="[name]" :name="[name]" :nullmsg="[nullmsg]" :datatype="[dataType]" :data-options="[dataOptions]" :data-enableAutoSave="[dataEnableAutoSave]" >{{vueBind}}</textarea>'
                +'</template>'
                +'</div>'
            });
        }else if($(thisobj).is("vue-tree")){
            //编辑器
            Vue.component("vue-tree",{
                props:['dataId','dataUrl','dataOptions','dataDefaultClass'],
                template: '<div><ul :id="[dataId]" :data-url="[dataUrl]" :data-options="[dataOptions]" :class="[dataDefaultClass?'+"'ztree'"+':'+"'fa-ztree'"+']" data-toggle="ezui.tree" ></ul></div>'
            });
        }else if($(thisobj).is('vue-uploader')){
            Vue.component("vue-uploader",{
                props:["dataId","dataTargetName","dataCanAdd","dataInitList","dataMultiple","dataExtensions",
                    "dataTarget","dataParams","dataFileNumLimit","dataUploadServer","dataCanPreview","dataPoster",
                    "dataUploadType","dataFileSingleSizeLimit","dataCanUpload"],

            })
            template:'<div class="input-group form-inline">'+
            '	<div :id="[dataId]" data-toggle="ezui.uploader" :data-target-name="[dataTargetName]" :data-canadd="[dataCanAdd]" :data-initlist="[dataInitList]" :data-multiple="[dataMultiple]" :data-extensions="[dataExtensions]"' +
            ' :data-target="[dataTarget]" :data-params="[dataParams]" :data-fileNumLimit="[dataFileNumLimit]" :data-poster="[dataPoster]" ' +
            ':data-fileSingleSizeLimit="[dataFileSingleSizeLimit]"  :data-uploadtype="[dataUploadType]" :data-uploadserver="[dataUploadServer]" :data-canpreview="[dataCanPreview]" ' +
            ':data-canUpload="[dataCanUpload]" :class="[dataUploadType=='+"'image'"+'?'+"'upload-attachments-pic'"+':'+"''"+']">'+
            '					<!--用来存放文件信息-->'+
            '					<div class="ez_picker" style="position:static;margin-left: 0px;">'+
            '						<button type="button" class="btn-sm btn btn-primary"><i class="fa fa-upload" aria-hidden="true"></i> 选择文件</button>'+
            '					</div>'+
            '					<div  :class="[dataUploadType=='+"'image'"+'?'+"'uploading-pic_'"+'+dataTarget.replace('+"'#'"+','+"''"+')'+':'+"'ez_filelist'"+']">'+
            '					</div>'+
            '				</div>'+
            '				<!--待隐藏-->'+
            '				<input type="text" :id="[dataTargetName.replace('+"'#'"+','+"''"+')]" value="" class="hide">'+
            '				<input type="text" :id="[dataTarget.replace('+"'#'"+','+"''"+')]" value="" class="hide">'+
            '			</div>'
        }else if($(thisobj).is(compentName+"-listbar")){
            Vue.component(compentName+"-listbar",{
                props:['dataTableid','dataMessage','dataDelurl','dataAddurl','dataAddbuttonid','dataAddmodaltitle','dataParam','dataHidedefaultbtn'],
                template: '<div class="ezheader-tools form-inline eztable-topbar">'
                +'	<span class="eztable-btnbar">'
                +'<template v-if="dataHidedefaultbtn == undefined || dataHidedefaultbtn =='+"'true'"+'" >'
                +'<a href="javascript:;" class="btn btn-danger btn-sm mr-5" data-toggle="'+compentName+'Table.batch" :data-target="['+"'#'"+'+dataTableid]" :data-message="[dataMessage]" :data-url="[dataDelurl]">批量删除</a>'
                +'<template v-if="dataAddmodaltitle == undefined || dataAddmodaltitle =='+"''"+'" >'
                +'<a :id="[dataAddbuttonid]" :href="[dataAddurl]" class="btn btn-default btn-sm" data-width="700" data-height="500" data-target="#addModal" data-toggle="modal" modal-title="新建" data-backdrop="static">新建</a>'
                +'</template>'
                +'<template v-else >'
                +'<a :id="[dataAddbuttonid]" :href="[dataAddurl]" class="btn btn-default btn-sm" data-width="700" data-height="500" data-target="#addModal" data-toggle="modal" :modal-title="['+"'新建'"+'+dataAddmodaltitle]" data-backdrop="static">新建</a>'
                +'</template>'
                +'</template>'
                +'<template v-if="dataParam!=undefined">'
                +'<a v-for="param in JSON.parse(dataParam)" :id="[param.id]" :href="[param.url]" :class="[param.class]" class="btn btn-default btn-sm ml-5" >{{param.text}}</a>'
                +'</template>'
                +'	</span>'
                +'</div>'
            });
        }else if($(thisobj).is(compentName+"-searchbar")){
            //工具栏
            Vue.component(compentName+"-searchbar",{
                props:['dataTableid','dataParam'],
                template: '<div id="_searchbar" class="panel-collapse" role="tabpanel" aria-labelledby="collapse-search">'
                +'  <div class="well eztable-searchbar">'
                +'		<form class="form-inline ez-searchbar-inline" data-toggle="'+compentName+'Table.searchForm" :data-target="['+"'#'"+'+dataTableid]">'
                +'			<div v-for="param in dataParam" class="form-group pl-15">'
                +'				<label for="input-name" v-if="param.titleIsShow == undefined || param.titleIsShow=='+"'true'"+'" class="control-label">{{param.name}}</label>'
                +'				<input class="form-control" id="input-name" :name="['+"'search[\\'CN_'"+'+param.searchName+'+"'\\']'"+']" :placeholder="'+"'请输入'"+'+[param.name]" type="text">'
                +'			</div>'
                +'			<button class="btn btn-primary mr-5 " type="submit">搜索</button>'
                +'			<button class="btn btn-default" type="reset">清除</button>'
                +'		</form>'
                +'	</div>'
                +'</div>'
            });
        }else if($(thisobj).is(compentName+"-uedit")){
            //编辑器
            var readonlyTag = '';
            if($(thisobj)[0].getAttribute("readonly")!=null){
                readonlyTag = 'readonly="readonly"';
            }
            Vue.component(compentName+"-uedit",{
                props:['dataId','name','nullmsg','dataOptions','dataType','dataEnableAutoSave','vueBind'],
                template:  '<div>'
                +'<template v-if="dataType == undefined || dataType =='+"''"+'" >'+
                +'<textarea type="text/plain" :id="[dataId]" :data-id="[dataId]" data-toggle="ezui.editor" '+readonlyTag+' :data-textarea="[name]" :name="[name]" :nullmsg="[nullmsg]"  :data-options="[dataOptions]" :data-enableAutoSave="[dataEnableAutoSave]" >{{vueBind}}</textarea>'+
                +'</template>'
                +'<template v-else>'
                +'<textarea type="text/plain" :id="[dataId]" :data-id="[dataId]" data-toggle="ezui.editor" '+readonlyTag+' :data-textarea="[name]" :name="[name]" :nullmsg="[nullmsg]" :datatype="[dataType]" :data-options="[dataOptions]" :data-enableAutoSave="[dataEnableAutoSave]" >{{vueBind}}</textarea>'+
                +'</template>'
                +'</div>'
            });
        }else if($(thisobj).is(compentName+"-tree")){
            //编辑器
            Vue.component(compentName+"-tree",{
                props:['dataId','dataUrl','dataOptions','dataDefaultClass'],
                template: '<div><ul :id="[dataId]" :data-url="[dataUrl]" :data-options="[dataOptions]" :class="[dataDefaultClass?'+"'ztree'"+':'+"'fa-ztree'"+']" data-toggle="'+compentName+'.tree" ></ul></div>'
            });
        }else if($(thisobj).is(compentName+"-uploader")){
            Vue.component(compentName+"-uploader",{
                props:["dataId","dataTargetName","dataCanAdd","dataInitList","dataMultiple","dataExtensions",
                    "dataTarget","dataParams","dataFileNumLimit","dataUploadServer","dataCanPreview","dataPoster",
                    "dataUploadType","dataFileSingleSizeLimit","dataCanUpload"],
                template:'<div class="input-group form-inline">'+
                '	<div :id="[dataId]" data-toggle="'+compentName+'.uploader" :data-target-name="[dataTargetName]" :data-canadd="[dataCanAdd]" :data-initlist="[dataInitList]" :data-multiple="[dataMultiple]" :data-extensions="[dataExtensions]"' +
                ' :data-target="[dataTarget]" :data-params="[dataParams]" :data-fileNumLimit="[dataFileNumLimit]" :data-poster="[dataPoster]" ' +
                ':data-fileSingleSizeLimit="[dataFileSingleSizeLimit]"  :data-uploadtype="[dataUploadType]" :data-uploadserver="[dataUploadServer]" :data-canpreview="[dataCanPreview]" ' +
                ':data-canUpload="[dataCanUpload]" :class="[dataUploadType=='+"'image'"+'?'+"'upload-attachments-pic'"+':'+"''"+']">'+
                '					<!--用来存放文件信息-->'+
                '					<div class="ez_picker" style="position:static;margin-left: 0px;">'+
                '						<button type="button" class="btn-sm btn btn-primary"><i class="fa fa-upload" aria-hidden="true"></i> 选择文件</button>'+
                '					</div>'+
                '					<div  :class="[dataUploadType=='+"'image'"+'?'+"'uploading-pic_'"+'+dataTarget.replace('+"'#'"+','+"''"+')'+':'+"'ez_filelist'"+']">'+
                '					</div>'+
                '				</div>'+
                '				<!--待隐藏-->'+
                '				<input type="text" :id="[dataTargetName.replace('+"'#'"+','+"''"+')]" value="" class="hide">'+
                '				<input type="text" :id="[dataTarget.replace('+"'#'"+','+"''"+')]" value="" class="hide">'+
                '			</div>'
            })

        }
        var domId = $(thisobj).attr("id");
        new Vue({
            el:'#'+domId,
        });

    };
}));
