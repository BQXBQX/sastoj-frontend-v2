import { Layout, Nav } from '@douyinfe/semi-ui';
import {
  IconAvatar,
  IconButton,
  IconCollapse,
  IconDescriptions,
  IconTooltip,
} from '@douyinfe/semi-icons-lab';
import logoNoText from '../assets/logo_no_text.svg';
import text from '../assets/text.svg';
import { Breadcrumb } from '@douyinfe/semi-ui';
import { IconArticle, IconHome } from '@douyinfe/semi-icons';

const { Header, Content, Sider } = Layout;

export function ManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ height: '100%', width: '100%' }}>
      <Sider>
        <Nav
          style={{ maxWidth: 220, height: '100%' }}
          defaultSelectedKeys={['Contest']}
          items={[
            {
              itemKey: 'Contest',
              text: '比赛管理',
              icon: <IconDescriptions />,
            },
            { itemKey: 'User', text: '用户管理', icon: <IconAvatar /> },
            {
              itemKey: 'Problems',
              text: '问题管理',
              icon: <IconTooltip />,
            },
            {
              itemKey: 'Cases',
              text: '测试点管理',
              icon: <IconCollapse />,
            },
            {
              itemKey: 'Judges',
              text: '阅卷管理',
              icon: <IconButton />,
            },
          ]}
          footer={{
            collapseButton: true,
          }}
        >
          <Nav.Header
            style={{
              padding: '1rem 0.6rem',
              maxHeight: '100px',
              boxSizing: 'border-box',
            }}
            logo={
              <img
                src={logoNoText}
                style={{ objectFit: 'contain', height: '50px', width: '50px' }}
              />
            }
            text={
              <img src={text} style={{ width: '100%', objectFit: 'contain' }} />
            }
          />
        </Nav>
      </Sider>
      <Layout style={{ height: '100%', display: 'flex' }}>
        <Header
          style={{
            height: '2.4rem',
            borderBottom: '1px solid var(--semi-color-border)',
            display: 'flex',
            flexDirection: 'row',
            boxSizing: 'border-box',
            padding: '0 1rem',
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item icon={<IconHome size="small" />}></Breadcrumb.Item>
            <Breadcrumb.Item icon={<IconArticle size="small" />}>
              Breadcrumb
            </Breadcrumb.Item>
            <Breadcrumb.Item>With Icon</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ flexGrow: 1 }}>{children}</Content>
      </Layout>
    </Layout>
  );
}
