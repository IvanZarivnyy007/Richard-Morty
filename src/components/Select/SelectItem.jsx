import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectItem = () => {
  return (
    <Space wrap>
      <Select
        defaultValue="Species"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'Human',
            label: 'Human',
          },
          {
            value: 'Alien',
            label: 'Alien',
          },
          {
            value: 'Animal',
            label: 'Animal',
          },
          {
            value: 'Robot',
            label: 'Robot',
          },
        ]}
      />
      <Select
        defaultValue="Status"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'Dead',
            label: 'Dead',
          },
          {
            value: 'Alive',
            label: 'Alive',
          },
          {
            value: 'Unknown',
            label: 'Unknown',
          },
        ]}
      />
    </Space>
  );
};

export default SelectItem;
