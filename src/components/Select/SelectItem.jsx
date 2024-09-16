import { Select, Space } from 'antd';

const SelectItem = ({ handleChange }) => {
  const handleSpeciesChange = (value) => {
    handleChange({ type: 'species', value });
  };

  const handleStatusChange = (value) => {
    handleChange({ type: 'status', value });
  };
  return (
    <Space wrap>
      <Select
        defaultValue="Species"
        style={{ width: 120 }}
        onChange={handleSpeciesChange}
        options={[
          {
            value: 'human',
            label: 'Human',
          },
          {
            value: 'alien',
            label: 'Alien',
          },
          {
            value: 'animal',
            label: 'Animal',
          },
          {
            value: 'robot',
            label: 'Robot',
          },
        ]}
      />
      <Select
        defaultValue="Status"
        style={{ width: 120 }}
        onChange={handleStatusChange}
        options={[
          {
            value: 'dead',
            label: 'Dead',
          },
          {
            value: 'alive',
            label: 'Alive',
          },
          {
            value: 'unknown',
            label: 'Unknown',
          },
        ]}
      />
    </Space>
  );
};

export default SelectItem;
