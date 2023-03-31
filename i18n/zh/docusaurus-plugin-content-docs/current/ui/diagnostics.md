---
sidebar_label: 诊断
title: 诊断
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsConstants from '@site/core/TabsConstants';

**Diagnostics** 功能通过在后台运行多项检查来检测环境中的常见问题（例如不满足最低要求、配置错误等），帮助你自行排除和修复 Rancher Desktop 应用程序的问题。

**注意**：Rancher Desktop *不会*将诊断数据发送到任何远程服务器进行处理或存储。

<Tabs groupId="os" defaultValue={TabsConstants.defaultOs}>
<TabItem value="Windows">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Windows_Diagnostics.png)

</TabItem>
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/macOS_Diagnostics.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Linux_Diagnostics.png)

</TabItem>
</Tabs>

每次启动应用程序时都会运行诊断检查。如果发现任何问题，则失败检查的数量会显示在左侧导航栏中的 *Diagnostics* 菜单文本的旁边。*Diagnostics* 选项卡会显示诊断测试的结果，突出显示需要注意的区域，并指导你解决问题。

如果你进行了非标准设置，并且知道这些检查不适用于你的情况，你可以在此选项卡上 mute/unmute 个别检查。你还可以随时重新运行诊断程序，从而验证你对环境所做的更改是否已经解决了问题。
