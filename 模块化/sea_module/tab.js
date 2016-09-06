/**
 * Created by Administrator on 2016/9/6 0006.
 */
define(function(require,exports,module){
    var tabModule = (function(m){
        function Tab(id) {
            this.tab = document.getElementById(id);
            this.aInput = this.tab.getElementsByTagName('input');
            this.aDiv = this.tab.getElementsByTagName('div');
            this.nowIndex = 0;
        }

        Tab.prototype.init = function() {
            this.aInput[0].style.backgroundColor = 'orange';
            this.aDiv[0].style.display = 'block';
            var that = this;
            for (var i = 0; i < this.aInput.length; i++) {
                this.aInput[i].index = i;
                this.aInput[i].onclick = function() {
                    // �л�����
                    // �����this�ǵ�ǰ�����input
                    that.change(this);
                }
            }
            // this.autoPlay();
        }

        Tab.prototype.change = function(obj) {
            // �����this��ʵ������
            for (var i = 0; i < this.aInput.length; i++) {
                this.aInput[i].style.backgroundColor = '';
                this.aDiv[i].style.display = 'none';
            }
            obj.style.backgroundColor = 'orange';
            this.aDiv[obj.index].style.display = 'block';
        }

        Tab.prototype.autoPlay = function(){
            // �����this��ʵ������
            var that = this;
            setInterval(function(){
                // �Զ��л�����
                // �����this��window
                // nowIndex �仯��Χ��0 1 2
                if(that.nowIndex === that.aInput.length - 1){
                    // �����ǰѭ�����л������һ������ô�ʹ�ͷ��ʼ
                    that.nowIndex = 0;
                }else{
                    that.nowIndex++;
                }
                var nowInput = that.aInput[that.nowIndex];
                that.change(nowInput);
            },1000);
        }
        var tab = new Tab('tab');
        tab.init();
        tab.autoPlay();
        m.Tab = Tab;
        return m;
    })(tabModule || {});

    exports.module = tabModule;
});