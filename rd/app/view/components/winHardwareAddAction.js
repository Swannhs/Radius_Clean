Ext.define('Rd.view.components.winHardwareAddAction', {
    extend      : 'Ext.window.Window',
    alias       : 'widget.winHardwareAddAction',
    title       : i18n("sAdd_a_command"),
    layout      : 'fit',
    autoShow    : false,
    width       : 350,
    height      : 220,
    glyph       : Rd.config.icnAdd,
    grid        : null,
    requires: [
        'Rd.view.components.btnCommon'
    ],
    initComponent: function() {
        var me = this;
        me.items = [
            {
                xtype       : 'form',
                border      : false,
                layout      : 'anchor',
                autoScroll  : true,
                defaults    : {
                    anchor  : '100%'
                },
                fieldDefaults: {
                    msgTarget       : 'under',
                    labelClsExtra   : 'lblRd',
                    labelAlign      : 'left',
                    labelSeparator  : '',
                    margin          : 15
                },
                defaultType: 'textfield',
                items: [
                    {
                        fieldLabel  : i18n("sCommand"),
                        name        : "command",
                        allowBlank  : false,
                        blankText   : i18n("sSupply_a_value"),
                        labelClsExtra: 'lblRdReq'
                    }
                ],
                buttons: [{xtype: 'btnCommon'}]
            }
        ];
        me.callParent(arguments);
    }
});
